import 'package:flutter/widgets.dart';
import 'package:http/http.dart' as http;
import 'package:mobile/providers/auth_provider.dart';
import '../models/user_model.dart';
import 'dart:convert';

class UserProvider extends ChangeNotifier {
  User? user;
  late AuthProvider authProvider;
  final String baseUrl = 'http://localhost:5000/api/v1';

  update(AuthProvider newAuthProvider) {
    authProvider = newAuthProvider;
    if (user == null && authProvider.isLoggedin) {
      fetchCurrentUser();
    }
  }

  Future<void> fetchCurrentUser() async {
    try {
      http.Response response = await http.get(
        Uri.parse('$baseUrl/user/current'),
        headers: {'authorization': 'Bearer ${authProvider.token}'},
      );
      if (response.statusCode == 200) {
        updateUser(User.fromJson(json.decode(response.body)));
      }
    } catch (e) {
      rethrow;
    }
  }

  void updateUser(User updatedUser) {
    user = updatedUser;
    notifyListeners();
  }
}
