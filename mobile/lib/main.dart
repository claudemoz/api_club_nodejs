import 'package:flutter/material.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Hitema FC',
      home: Scaffold(
        appBar: AppBar(title: Text('Hitema FC')),
        body: Center(child: Text('Hitema FC')),
      ),
    );
  }
}
