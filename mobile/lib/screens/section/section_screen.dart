import 'package:flutter/material.dart';

// Écran principal des sections
class SectionScreen extends StatelessWidget {
  const SectionScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Nos Sections')),
      body: ListView(
        children: [
          _buildSectionTile(
            context,
            title: 'Section Masculine Junior',
            onTap:
                () => Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => MasculineJuniorSection(),
                  ),
                ),
          ),
          _buildSectionTile(
            context,
            title: 'Section Masculine Senior',
            onTap:
                () => Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => MasculineSeniorSection(),
                  ),
                ),
          ),
          _buildSectionTile(
            context,
            title: 'Section Féminine Junior',
            onTap:
                () => Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => FeminineJuniorSection(),
                  ),
                ),
          ),
          _buildSectionTile(
            context,
            title: 'Section Féminine Senior',
            onTap:
                () => Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => FeminineSeniorSection(),
                  ),
                ),
          ),
        ],
      ),
    );
  }

  // Méthode helper pour créer des tuiles de section
  Widget _buildSectionTile(
    BuildContext context, {
    required String title,
    required VoidCallback onTap,
  }) {
    return ListTile(
      title: Text(title),
      trailing: Icon(Icons.arrow_forward_ios),
      onTap: onTap,
    );
  }
}

// Écran de la section masculine junior
class MasculineJuniorSection extends StatelessWidget {
  const MasculineJuniorSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Section Masculine Junior')),
      body: ListView(
        padding: EdgeInsets.all(16),
        children: [
          _buildSectionInfo(
            title: 'Présentation',
            content:
                'Notre section masculine junior regroupe les jeunes talents âgés de 13 à 18 ans.',
          ),
          SizedBox(height: 16),
          _buildSectionInfo(
            title: 'Entraînements',
            content:
                'Les entraînements ont lieu les mercredis et vendredis de 17h à 19h.',
          ),
          SizedBox(height: 16),
          _buildSectionInfo(
            title: 'Compétitions',
            content: 'Participation aux championnats régionaux et nationaux.',
          ),
        ],
      ),
    );
  }

  Widget _buildSectionInfo({required String title, required String content}) {
    return Card(
      elevation: 2,
      child: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title,
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 8),
            Text(content),
          ],
        ),
      ),
    );
  }
}

// Écran de la section masculine senior
class MasculineSeniorSection extends StatelessWidget {
  const MasculineSeniorSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Section Masculine Senior')),
      body: ListView(
        padding: EdgeInsets.all(16),
        children: [
          _buildSectionInfo(
            title: 'Présentation',
            content:
                'Notre section masculine senior représente l\'élite de notre club pour les joueurs de plus de 18 ans.',
          ),
          SizedBox(height: 16),
          _buildSectionInfo(
            title: 'Entraînements',
            content:
                'Les entraînements ont lieu les lundis, mercredis et vendredis de 19h à 21h.',
          ),
          SizedBox(height: 16),
          _buildSectionInfo(
            title: 'Compétitions',
            content:
                'Participation aux championnats nationaux et internationaux.',
          ),
        ],
      ),
    );
  }

  Widget _buildSectionInfo({required String title, required String content}) {
    return Card(
      elevation: 2,
      child: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title,
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 8),
            Text(content),
          ],
        ),
      ),
    );
  }
}

// Écran de la section féminine junior
class FeminineJuniorSection extends StatelessWidget {
  const FeminineJuniorSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Section Féminine Junior')),
      body: ListView(
        padding: EdgeInsets.all(16),
        children: [
          _buildSectionInfo(
            title: 'Présentation',
            content:
                'Notre section féminine junior développe le talent des jeunes joueuses âgées de 13 à 18 ans.',
          ),
          SizedBox(height: 16),
          _buildSectionInfo(
            title: 'Entraînements',
            content:
                'Les entraînements ont lieu les mardis et jeudis de 17h à 19h.',
          ),
          SizedBox(height: 16),
          _buildSectionInfo(
            title: 'Compétitions',
            content:
                'Participation aux championnats régionaux et nationaux féminins.',
          ),
        ],
      ),
    );
  }

  Widget _buildSectionInfo({required String title, required String content}) {
    return Card(
      elevation: 2,
      child: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title,
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 8),
            Text(content),
          ],
        ),
      ),
    );
  }
}

// Écran de la section féminine senior
class FeminineSeniorSection extends StatelessWidget {
  const FeminineSeniorSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Section Féminine Senior')),
      body: ListView(
        padding: EdgeInsets.all(16),
        children: [
          _buildSectionInfo(
            title: 'Présentation',
            content:
                'Notre section féminine senior représente l\'excellence de notre club pour les joueuses de plus de 18 ans.',
          ),
          SizedBox(height: 16),
          _buildSectionInfo(
            title: 'Entraînements',
            content:
                'Les entraînements ont lieu les lundis, mercredis et vendredis de 19h à 21h.',
          ),
          SizedBox(height: 16),
          _buildSectionInfo(
            title: 'Compétitions',
            content:
                'Participation aux championnats nationaux et internationaux féminins.',
          ),
        ],
      ),
    );
  }

  Widget _buildSectionInfo({required String title, required String content}) {
    return Card(
      elevation: 2,
      child: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title,
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 8),
            Text(content),
          ],
        ),
      ),
    );
  }
}
