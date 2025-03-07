import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:go_router/go_router.dart';
import 'package:mobile/services/auth_service.dart';

import '../models/signup_form_model.dart';
import '../models/signin_form_model.dart';
import '../models/user_model.dart';

class AuthProvider extends ChangeNotifier {
  final String baseUrl = 'http://localhost:5000/api/v1';
  String? token;
  final FlutterSecureStorage storage = FlutterSecureStorage();
  bool isLoading = false;
  late bool isLoggedin;

  Future<void> initAuth() async {
    try {
      String? oldToken = await storage.read(key: 'token');
      if (oldToken == null) {
        isLoggedin = false;
      } else {
        token = oldToken;
        await refreshToken();
        isLoggedin = true;
      }
      notifyListeners();
    } catch (e) {
      rethrow;
    }
  }

  Future<void> refreshToken() async {
    try {
      http.Response response = await http.get(
        Uri.parse('$baseUrl/user/refresh-token'),
        headers: {'authorization': 'Bearer $token'},
      );
      if (response.statusCode == 200) {
        final Map<String, dynamic> data = json.decode(response.body);
        final String? newToken = data['token'];
        if (token != null) {
          storage.write(key: 'token', value: token);
          token = newToken;
        }
      } else {
        signout();
      }
    } catch (e) {
      rethrow;
    }
  }

  Future<dynamic> signup(SignupForm signupForm) async {
    try {
      isLoading = true;
      http.Response response = await http.post(
        Uri.parse('$baseUrl/user/register'),
        headers: {'Content-type': 'application/json'},
        body: json.encode(signupForm.toJson()),
      );
      isLoading = false;
      if (response.statusCode != 200) {
        return json.decode(response.body);
      }
      return null;
    } catch (e) {
      isLoading = false;
      rethrow;
    }
  }

  Future<dynamic> signin(SigninForm signinForm) async {
    try {
      isLoading = true;
      http.Response response = await http.post(
        Uri.parse('$baseUrl/user/login'),
        headers: {'Content-type': 'application/json'},
        body: json.encode(signinForm.toJson()),
      );
      final Map<dynamic, dynamic> body = json.decode(response.body);
      if (response.statusCode == 200) {
        final User user = User.fromJson(body['user']);
        token = body['token'];
        if (token != null) {
          await storage.write(key: "token", value: token);
          isLoggedin = true;
          // await AuthService.saveToken(token);
        }
        return user;
      } else {
        return body;
      }
    } catch (e) {
      isLoading = false;
      rethrow;
    }
  }

  Future<void> signout() async {
    await storage.delete(key: "token");
    token = null;
    isLoggedin = false;
    notifyListeners();
  }
}
