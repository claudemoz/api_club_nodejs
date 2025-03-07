import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:mobile/providers/user_provider.dart';
import 'package:provider/provider.dart';
import '../../providers/auth_provider.dart';
import '../../models/signin_form_model.dart';

class SigninScreen extends StatefulWidget {
  const SigninScreen({super.key});

  @override
  State<SigninScreen> createState() => _SigninScreenState();
}

class _SigninScreenState extends State<SigninScreen> {
  final GlobalKey<FormState> key = GlobalKey<FormState>();
  late SigninForm signinForm;
  bool hidePassword = true;
  FormState get form => key.currentState!;

  @override
  void initState() {
    signinForm = SigninForm(email: 'user1@rrr.cd', password: 'azerty');
    super.initState();
  }

  Future<void> submitForm() async {
    if (form.validate()) {
      form.save();
      final response = await Provider.of<AuthProvider>(
        context,
        listen: false,
      ).signin(signinForm);
      if (mounted) {
        print(response);
        Provider.of<UserProvider>(context, listen: false).updateUser(response);
        return GoRouter.of(context).goNamed('main');
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        padding: const EdgeInsets.only(
          top: 50,
          bottom: 20,
          left: 20,
          right: 20,
        ),
        color: Colors.black,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Text(
              'Connexion',
              style: TextStyle(
                fontSize: 18,
                color: Colors.white,
                fontWeight: FontWeight.bold,
              ),
            ),
            const Padding(padding: EdgeInsets.symmetric(vertical: 15)),
            Form(
              key: key,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const Text(
                    'email',
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const Padding(padding: EdgeInsets.symmetric(vertical: 3)),
                  TextFormField(
                    decoration: InputDecoration(
                      fillColor: Colors.grey.shade900,
                      filled: true,
                    ),
                    style: const TextStyle(color: Colors.white),
                    initialValue: signinForm.email,
                    onSaved: (newValue) {
                      signinForm.email = newValue!;
                    },
                  ),
                  const Padding(padding: EdgeInsets.symmetric(vertical: 10)),
                  const Text(
                    'password',
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const Padding(padding: EdgeInsets.symmetric(vertical: 3)),

                  TextFormField(
                    obscureText: hidePassword == true ? true : false,
                    decoration: InputDecoration(
                      fillColor: Colors.grey.shade900,
                      filled: true,
                      suffixIcon: IconButton(
                        icon:
                            hidePassword == true
                                ? Icon(Icons.visibility, color: Colors.white)
                                : Icon(
                                  Icons.visibility_off,
                                  color: Colors.white,
                                ),
                        onPressed: () {
                          setState(() {
                            hidePassword = !hidePassword;
                          });
                        },
                      ),
                    ),
                    style: TextStyle(color: Colors.white),
                    initialValue: signinForm.password,
                    onSaved: (newValue) {
                      signinForm.password = newValue!;
                    },
                  ),
                  const Padding(padding: EdgeInsets.symmetric(vertical: 10)),
                  TextButton(
                    style: TextButton.styleFrom(
                      backgroundColor: Color(0xffac255e),
                    ),
                    onPressed: submitForm,
                    child: const Text(
                      'Se connecter',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
