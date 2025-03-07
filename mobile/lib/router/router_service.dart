import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:go_router/go_router.dart';
import 'package:mobile/layouts/MainNavigationLayout.dart';
import 'package:mobile/layouts/root_layout.dart';
import 'package:mobile/providers/auth_provider.dart';
import 'package:mobile/screens/auth/signin_screen.dart';
import 'package:mobile/screens/home/home_screen.dart';
import 'package:mobile/screens/news/news_screen.dart';
import 'package:mobile/screens/section/section_screen.dart';
import 'package:provider/provider.dart';

class RoutingService {
  static GoRouter generateRoutes() {
    return GoRouter(
      initialLocation: '/signin',
      redirect: (BuildContext context, GoRouterState state) async {
        try {
          print(state.fullPath);
          // Accéder au provider depuis le contexte de redirection
          final authProvider = Provider.of<AuthProvider>(
            context,
            listen: false,
          );
          // final storage = FlutterSecureStorage();
          // await storage.delete(key: "token");
          // Initialiser l'état d'authentification
          await authProvider.initAuth();

          final bool? isLoggedin = authProvider.isLoggedin;

          if (isLoggedin == true) {
            // Si l'utilisateur est déjà sur la page de connexion mais qu'il est connecté,
            // on le redirige vers la page principale
            // if (state.fullPath == '/signin') {
            // }
            return '/';
            // Sinon, on le laisse sur la page actuelle
            // return null;
          } else {
            // Si l'utilisateur n'est pas sur la page de connexion et qu'il n'est pas connecté,
            // on le redirige vers la page de connexion
            // if (state.fullPath != '/signin') {
            // }
            return '/signin';
            // Sinon, on le laisse sur la page de connexion
            // return null;
          }
        } catch (e) {
          print("Erreur lors de la redirection: $e");
          return '/signin';
        }
      },
      routes: [
        GoRoute(
          path: '/',
          name: 'main',
          builder: (context, state) => const MainNavigationLayout(),
        ),
        GoRoute(
          path: '/signin',
          name: 'signin',
          builder: (context, state) => RootLayout(screen: SigninScreen()),
        ),
        GoRoute(
          path: '/home',
          name: 'home',
          builder: (context, state) => RootLayout(screen: HomeScreen()),
        ),
        GoRoute(
          path: '/news',
          name: 'news',
          builder: (context, state) => RootLayout(screen: NewsScreen()),
        ),
        GoRoute(
          path: '/sections',
          name: 'sections',
          builder:
              (context, state) => RootLayout(screen: const SectionScreen()),
        ),
      ],
    );
  }
}
