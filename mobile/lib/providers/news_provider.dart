import 'dart:collection';

import 'package:flutter/material.dart';
import 'package:mobile/models/news_model.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class NewsProvider extends ChangeNotifier {
  final String baseUrl = 'http://localhost:5000/api/v1';
  List<NewsItem> _news = [];
  UnmodifiableListView<NewsItem> get news {
    _news.sort((a, b) => b.date.compareTo(a.date));
    return UnmodifiableListView(_news);
  }

  void fetchNews() async {
    try {
      http.Response response = await http.get(
        Uri.parse('$baseUrl/news/get-all-news'),
      );
      if (response.statusCode == 200) {
        // print(json.decode(response.body));

        _news =
            (json.decode(response.body) as List)
                .map((item) => NewsItem.fromJson(item))
                .toList();
      }
    } catch (e) {
      rethrow;
    }
  }

  Future<void> addNews(NewsItem data) async {
    try {
      http.Response response = await http.post(
        Uri.parse('$baseUrl/news/create-news'),
        body: json.encode(data.toJson()),
        headers: {'Content-type': 'application/json'},
      );

      if (response.statusCode == 201) {
        _news.add(NewsItem.fromJson(json.decode(response.body)));
        notifyListeners();
      }
    } catch (e) {
      rethrow;
    }
  }
}
