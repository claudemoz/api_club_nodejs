class NewsItem {
  int? id;
  final String title;
  final String summary;
  final String? description;
  final String imageUrl;
  final DateTime date;
  // DateTime

  NewsItem({
    this.id,
    required this.title,
    required this.summary,
    this.description,
    required this.imageUrl,
    required this.date,
  });

  NewsItem.fromJson(Map<String, dynamic> json)
    : id = json['news_id'],
      title = json['title'],
      summary = json['summary'],
      description = json['description'],
      date =
          json['date'] is String ? DateTime.parse(json['date']) : json['date'],
      imageUrl = json['image'];

  Map<String, dynamic> toJson() {
    return {
      'title': title,
      'summary': summary,
      'description': description,
      'image': imageUrl,
    };
  }
}
