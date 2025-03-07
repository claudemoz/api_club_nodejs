class SignupForm {
  String email;
  String? firstname;
  String? lastname;
  String? password;
  SignupForm({
    required this.email,
    this.firstname,
    this.lastname,
    this.password,
  });

  Map<String, dynamic> toJson() {
    return {
      'email': email,
      'firstname': firstname,
      'lastname': lastname,
      'password': password,
    };
  }
}
