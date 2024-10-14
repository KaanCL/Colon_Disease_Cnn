# Colon Disease Detection using Deep Learning

This project involves building a deep learning model to classify colon diseases into four categories and deploying it as a web application. Users can upload colon images through a web interface, and the model predicts the type of disease based on the input image.

## Table of Contents
- [Dataset](#dataset)
- [Model Architecture](#model-architecture)
- [Training](#training)
- [Model Saving](#model-saving)
- [Backend API (Flask)](#backend-api-flask)
- [Frontend Application (React)](#frontend-application-react)

## Dataset

The dataset used in this project is the **[Curated Colon Dataset for Deep Learning](https://www.kaggle.com/datasets/francismon/curated-colon-dataset-for-deep-learning/data)** from Kaggle. It consists of colon images classified into four categories:

- `0`: Normal
- `1`: Ulcerative Colitis
- `2`: Polyps
- `3`: Esophagitis

## Model Architecture

We utilized **EfficientNetB2**, a deep learning model pre-trained on ImageNet, as the backbone for image classification. Key aspects of the model include:

- **Input Size**: 224x224 RGB images.
- **Gaussian Noise**: Applied to prevent overfitting.
- **Global Average Pooling**: Reduces the size of feature maps.
- **Dense Layer**: A fully connected layer with 256 neurons.
- **Batch Normalization**: Stabilizes training.
- **Dropout**: Set to 0.2 to reduce overfitting.
- **Output Layer**: 4 output neurons for 4 disease categories with softmax activation.

## Training

The model was trained for **20 epochs** and achieved a classification accuracy of **96%** on the validation set.

## Model Saving

After training, the model was saved in `.h5` format for future use in deployment.

## Backend API (Flask)

A Flask-based API was created to enable users to upload an image and receive predictions from the trained model. The API accepts an image file in `form-data` format and returns a prediction of the disease along with a confidence score.

- **Route**: `/predict`
- **Method**: `POST`
- **Input**: Image file.
- **Output**: Predicted class and confidence score in JSON format.

## Frontend Application (React)

On the frontend, **React** was used to build a user interface where users can upload colon images and receive predictions. The **react-dropzone** library was used to enable drag-and-drop functionality for image uploads. The uploaded image is sent to the Flask API for prediction, and the result is displayed to the user.

### Frontend Features:
- **Drag-and-drop** image upload functionality.
- Displays prediction and confidence score after processing.
- Communicates with the backend API using HTTP requests.

---

This README outlines how the project classifies colon diseases using a deep learning model, explains the backend Flask API for predictions, and describes the frontend React application for image upload and result display. This solution allows users to easily upload images, analyze them using the trained model, and view predictions in real-time.
