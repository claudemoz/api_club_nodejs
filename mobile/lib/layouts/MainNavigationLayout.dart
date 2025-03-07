import 'package:flutter/material.dart';
import 'package:mobile/screens/profile/profile_screen.dart';
import '../layouts/root_layout.dart';
import '../screens/home/home_screen.dart';
import '../screens/news/news_screen.dart';
import '../screens/section/section_screen.dart';

class MainNavigationLayout extends StatefulWidget {
  const MainNavigationLayout({super.key});

  @override
  _MainNavigationLayoutState createState() => _MainNavigationLayoutState();
}

class _MainNavigationLayoutState extends State<MainNavigationLayout> {
  int _selectedIndex = 0;

  final List<Widget> _screens = [
    HomeScreen(),
    NewsScreen(),
    SectionScreen(),
    ProfileScreen(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed, // Pour afficher plus de 3 items
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Accueil'),
          BottomNavigationBarItem(
            icon: Icon(Icons.article),
            label: 'Actualités',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.category),
            label: 'Sections',
          ),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
        ],
      ),
    );
  }
}
