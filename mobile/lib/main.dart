import 'package:flutter/material.dart';
import 'package:mobile/layouts/MainNavigationLayout.dart';
import 'package:mobile/providers/auth_provider.dart';
import 'package:mobile/providers/news_provider.dart';
import 'package:mobile/providers/user_provider.dart';
import 'package:mobile/router/router_service.dart';
import 'package:mobile/screens/home/home_screen.dart';
import 'package:provider/provider.dart';
import './layouts/root_layout.dart';
import 'package:intl/date_symbol_data_local.dart';

void main() {
  initializeDateFormatting('fr_FR', null).then((_) => runApp(App()));
}

class App extends StatefulWidget {
  const App({super.key});

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  final AuthProvider authProvider = AuthProvider();
  final UserProvider userProvider = UserProvider();
  final NewsProvider newsProvider = NewsProvider();

  @override
  void initState() {
    // authProvider.initAuth();
    newsProvider.fetchNews();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider.value(value: newsProvider),
        ChangeNotifierProvider.value(value: authProvider),
        ChangeNotifierProxyProvider<AuthProvider, UserProvider>(
          create: (_) => UserProvider(),
          update: (_, authProvider, oldUserProvider) {
            oldUserProvider?.update(authProvider);
            return oldUserProvider ?? UserProvider();
          },
        ),
      ],
      child: MaterialApp.router(
        routerConfig: RoutingService.generateRoutes(),
        debugShowCheckedModeBanner: false,
      ),
    );
  }
}
