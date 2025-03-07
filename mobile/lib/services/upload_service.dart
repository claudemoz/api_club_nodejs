import 'package:http/http.dart' as http;
import 'package:dio/dio.dart';
import 'dart:io';

class ImageUploader {
  static const String cloudinaryUrl =
      "https://api.cloudinary.com/v1_1/daogrxxyw/upload";
  static const String uploadPreset = "profile_image_shoes";

  static Future<String?> uploadImage(File imageFile) async {
    try {
      FormData formData = FormData.fromMap({
        "file": await MultipartFile.fromFile(imageFile.path),
        "upload_preset": uploadPreset,
      });
      Dio dio = Dio();
      Response response = await dio.post(cloudinaryUrl, data: formData);
      ;

      if (response.statusCode == 200) {
        return response.data["secure_url"];
      }
    } catch (e) {
      print("Erreur lors de l'upload de l'image: $e");
    }
    return null;
  }
}
