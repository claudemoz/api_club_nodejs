class User {
  int? id;
  String? email;
  String? firstname;
  String? lastname;
  User({
    required this.email,
    required this.firstname,
    required this.lastname,
    this.id,
  });

  User.fromJson(Map<dynamic, dynamic> json)
    : id = json['user_id'],
      email = json['email'],
      firstname = json['firstname'],
      lastname = json['lastname'];
}
