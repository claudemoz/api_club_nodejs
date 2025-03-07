import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:intl/intl.dart';
import 'package:mobile/models/news_model.dart';
import 'dart:io';

import 'package:mobile/providers/news_provider.dart';
import 'package:mobile/services/upload_service.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Actualités du Club',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: NewsScreen(),
    );
  }
}

class NewsScreen extends StatefulWidget {
  const NewsScreen({super.key});

  @override
  _NewsScreenState createState() => _NewsScreenState();
}

class _NewsScreenState extends State<NewsScreen> {
  // Liste mutable des actualités
  // final List<NewsItem> _newsList = [
  //   NewsItem(
  //     title: 'Victoire historique de l\'équipe junior',
  //     summary: 'Nos jeunes talents remportent le championnat régional',
  //     imageUrl:
  //         'https://media.istockphoto.com/id/576938444/fr/photo/collage-enfants-adultes-joueurs-de-football-en-action-sur-le-panorama-du-stade.jpg?s=612x612&w=0&k=20&c=gtcf4_CcBw6n0SkLpgmcz4-Lo7qM-cU6coMH96Fmvgo=',
  //     date: DateTime.now(),
  //     category: 'Sport',
  //   ),
  //   NewsItem(
  //     title: 'Nouveau partenariat avec un club international',
  //     summary: 'Un accord prometteur pour le développement de nos athlètes',
  //     imageUrl:
  //         'https://i.ytimg.com/vi/eu9lUbGJdLo/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGC0gZSgmMA8=&rs=AOn4CLAxE3_CK1LaZlxf3EMyWC3shHIguA',
  //     date: DateTime.now().subtract(Duration(days: 2)),
  //     category: 'Club',
  //   ),
  //   NewsItem(
  //     title: 'Stages d\'été ouverts aux inscriptions',
  //     summary: 'Opportunité unique pour les jeunes talents de se perfectionner',
  //     imageUrl:
  //         'https://www.prepa-physique.net/wp-content/uploads/2023/02/stage-de-foot.jpeg',
  //     date: DateTime.now().subtract(Duration(days: 5)),
  //     category: 'Formation',
  //   ),
  // ];

  // Méthode pour ajouter une nouvelle actualité
  void _addNews(NewsItem newItem) {
    Provider.of<NewsProvider>(context, listen: false).addNews(newItem);
  }

  // @override
  // void initState() {

  //   super.initState();
  // }

  @override
  Widget build(BuildContext context) {
    List<NewsItem> newsList = Provider.of<NewsProvider>(context).news;
    return Scaffold(
      appBar: AppBar(
        title: Text('Actualités'),
        actions: [
          IconButton(
            icon: Icon(Icons.filter_list),
            onPressed: () {
              // Future: Implémentation du filtrage des actualités
              _showFilterDialog(newsList);
            },
          ),
        ],
      ),
      body: RefreshIndicator(
        onRefresh: () async {
          // Future: Logique de rafraîchissement des actualités
          await Future.delayed(Duration(seconds: 1));
        },
        child: ListView.builder(
          padding: EdgeInsets.all(16),
          itemCount: newsList.length,
          itemBuilder: (context, index) {
            return _buildNewsCard(newsList[index], context);
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () {
          // Navigation vers l'écran de création d'actualité
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => NewsCreationScreen(onNewsAdded: _addNews),
            ),
          );
        },
      ),
    );
  }

  // Méthode pour afficher le dialogue de filtrage
  void _showFilterDialog(List<NewsItem> newsList) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Filtrer les actualités'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              // ElevatedButton(
              //   onPressed: () {
              //     // Filtrer par Sport
              //     setState(() {
              //       newsList.sort((a, b) => a.category.compareTo(b.category));
              //     });
              //     Navigator.of(context).pop();
              //   },
              //   child: Text('Trier par Catégorie'),
              // ),
              SizedBox(height: 10),
              ElevatedButton(
                onPressed: () {
                  // Trier par date
                  setState(() {
                    newsList.sort((a, b) => b.date.compareTo(a.date));
                  });
                  Navigator.of(context).pop();
                },
                child: Text('Trier par Date'),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildNewsCard(NewsItem news, BuildContext context) {
    return Card(
      elevation: 4,
      margin: EdgeInsets.only(bottom: 16),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Image de l'actualité
          ClipRRect(
            borderRadius: BorderRadius.vertical(top: Radius.circular(12)),
            child:
                news.imageUrl.startsWith('http')
                    ? Image.network(
                      news.imageUrl,
                      height: 200,
                      width: double.infinity,
                      fit: BoxFit.cover,
                    )
                    : Image.file(
                      File(news.imageUrl),
                      height: 200,
                      width: double.infinity,
                      fit: BoxFit.cover,
                    ),
          ),

          // Contenu de la carte
          Padding(
            padding: EdgeInsets.all(12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Catégorie et date
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    // Text(
                    //   news.category,
                    //   style: TextStyle(
                    //     color: Colors.blue,
                    //     fontWeight: FontWeight.bold,
                    //   ),
                    // ),
                    Text(
                      _formatDate(news.date),
                      style: TextStyle(color: Colors.grey),
                    ),
                  ],
                ),

                SizedBox(height: 8),

                // Titre
                Text(
                  news.title,
                  style: Theme.of(
                    context,
                  ).textTheme.titleLarge?.copyWith(fontWeight: FontWeight.bold),
                ),

                SizedBox(height: 8),

                // Résumé
                Text(
                  news.summary,
                  style: Theme.of(context).textTheme.bodyMedium,
                ),

                SizedBox(height: 12),

                // Bouton Lire plus
                Align(
                  alignment: Alignment.centerRight,
                  child: ElevatedButton(
                    onPressed: () {
                      // Navigation vers les détails de l'actualité
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => NewsDetailScreen(news: news),
                        ),
                      );
                    },
                    child: Text('Lire plus'),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  // Méthode utilitaire pour formater la date
  String _formatDate(DateTime date) {
    return '${date.day}/${date.month}/${date.year}';
  }
}

// Écran de création d'actualité
class NewsCreationScreen extends StatefulWidget {
  final Function(NewsItem) onNewsAdded;

  const NewsCreationScreen({super.key, required this.onNewsAdded});

  @override
  _NewsCreationScreenState createState() => _NewsCreationScreenState();
}

class _NewsCreationScreenState extends State<NewsCreationScreen> {
  final _formKey = GlobalKey<FormState>();
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _summaryController = TextEditingController();
  final TextEditingController _imageUrlController = TextEditingController();

  // String _selectedCategory = 'Sport';
  // final List<String> _categories = ['Sport', 'Club', 'Formation', 'Autre'];

  // Ajout de la variable pour stocker le fichier image
  File? _imageFile;

  // Méthode pour ouvrir la caméra
  Future<void> _takePicture() async {
    try {
      final picker = ImagePicker();
      final pickedFile = await picker.pickImage(
        source: ImageSource.camera,
        maxWidth: 600,
        maxHeight: 400,
        imageQuality: 80, // Qualité de compression de l'image
      );

      if (pickedFile != null) {
        setState(() {
          _imageFile = File(pickedFile.path);
          _imageUrlController.text =
              pickedFile.path; // Utiliser le chemin local
        });
      }
    } catch (e) {
      print('Erreur lors de la capture de l\'image : $e');
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Impossible de capturer l\'image')),
      );
    }
  }

  // Méthode pour ouvrir la galerie
  Future<void> _pickImageFromGallery() async {
    try {
      final picker = ImagePicker();
      final pickedFile = await picker.pickImage(
        source: ImageSource.gallery,
        maxWidth: 600,
        maxHeight: 400,
        imageQuality: 80,
      );

      if (pickedFile != null) {
        setState(() {
          _imageFile = File(pickedFile.path);
          _imageUrlController.text = pickedFile.path;
        });
      }
    } catch (e) {
      print('Erreur lors de la sélection de l\'image : $e');
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Impossible de sélectionner l\'image')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Créer une actualité')),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              TextFormField(
                controller: _titleController,
                decoration: InputDecoration(
                  labelText: 'Titre de l\'actualité',
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Veuillez entrer un titre';
                  }
                  return null;
                },
              ),
              SizedBox(height: 16),
              TextFormField(
                controller: _summaryController,
                decoration: InputDecoration(
                  labelText: 'Résumé',
                  border: OutlineInputBorder(),
                ),
                maxLines: 3,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Veuillez entrer un résumé';
                  }
                  return null;
                },
              ),
              SizedBox(height: 16),
              Row(
                children: [
                  Expanded(
                    child: TextFormField(
                      controller: _imageUrlController,
                      decoration: InputDecoration(
                        labelText: 'Chemin de l\'image',
                        border: OutlineInputBorder(),
                      ),
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Veuillez sélectionner une image';
                        }
                        return null;
                      },
                    ),
                  ),
                  Column(
                    children: [
                      IconButton(
                        icon: Icon(Icons.camera_alt),
                        onPressed: _takePicture,
                        tooltip: 'Prendre une photo',
                      ),
                      IconButton(
                        icon: Icon(Icons.photo_library),
                        onPressed: _pickImageFromGallery,
                        tooltip: 'Choisir dans la galerie',
                      ),
                    ],
                  ),
                ],
              ),
              // Aperçu de l'image
              if (_imageFile != null)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  child: Image.file(
                    _imageFile!,
                    height: 200,
                    width: double.infinity,
                    fit: BoxFit.cover,
                  ),
                ),
              SizedBox(height: 16),
              // DropdownButtonFormField<String>(
              //   value: _selectedCategory,
              //   decoration: InputDecoration(
              //     labelText: 'Catégorie',
              //     border: OutlineInputBorder(),
              //   ),
              //   items:
              //       _categories.map((category) {
              //         return DropdownMenuItem(
              //           value: category,
              //           child: Text(category),
              //         );
              //       }).toList(),
              //   onChanged: (value) {
              //     setState(() {
              //       _selectedCategory = value!;
              //     });
              //   },
              // ),
              SizedBox(height: 24),
              ElevatedButton(
                onPressed: _submitNews,
                child: Text('Ajouter l\'actualité'),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _submitNews() async {
    if (_formKey.currentState!.validate()) {
      String imageUrl =
          _imageFile != null ? _imageFile!.path : _imageUrlController.text;

      if (_imageFile != null) {
        String? uploadedImageUrl = await ImageUploader.uploadImage(_imageFile!);
        if (uploadedImageUrl != null) {
          imageUrl = uploadedImageUrl;
          print("Image uploadée avec succès: $imageUrl");
        } else {
          print("Échec de l'upload de l'image");
          return; // Stopper la soumission si l'upload échoue
        }
      }

      final newNews = NewsItem(
        title: _titleController.text,
        summary: _summaryController.text,
        imageUrl: imageUrl,
        date: DateTime.now(),
        // category: _selectedCategory,
      );

      widget.onNewsAdded(newNews);
      Navigator.pop(context);
    }
  }

  @override
  void dispose() {
    // Libération des contrôleurs
    _titleController.dispose();
    _summaryController.dispose();
    _imageUrlController.dispose();
    super.dispose();
  }
}

class NewsDetailScreen extends StatelessWidget {
  final NewsItem news;

  const NewsDetailScreen({super.key, required this.news});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Détails de l\'actualité')),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Image en pleine largeur
            news.imageUrl.startsWith('http')
                ? Image.network(
                  news.imageUrl,
                  width: double.infinity,
                  height: 250,
                  fit: BoxFit.cover,
                )
                : Image.file(
                  File(news.imageUrl),
                  width: double.infinity,
                  height: 250,
                  fit: BoxFit.cover,
                ),

            // Contenu détaillé
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Catégorie et date
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      // Text(
                      //   news.category,
                      //   style: TextStyle(
                      //     color: Colors.blue,
                      //     fontWeight: FontWeight.bold,
                      //     fontSize: 16,
                      //   ),
                      // ),
                      Text(
                        DateFormat('d/M/y', 'fr_FR').format(news.date),
                        style: TextStyle(color: Colors.grey, fontSize: 14),
                      ),
                    ],
                  ),

                  SizedBox(height: 16),

                  // Titre
                  Text(
                    news.title,
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                  ),

                  SizedBox(height: 16),

                  // Résumé détaillé (simulé ici, mais vous pouvez ajouter plus de contenu)
                  Text(
                    news.summary,
                    style: TextStyle(fontSize: 16, height: 1.5),
                  ),

                  // Vous pouvez ajouter plus de détails ou de contenu ici
                  SizedBox(height: 16),
                  Text(
                    'Informations supplémentaires',
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                  Text(
                    'Cette section peut contenir plus de détails sur l\'actualité, '
                    'des citations, ou des informations contextuelles.',
                    style: TextStyle(fontSize: 14, color: Colors.grey[700]),
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
