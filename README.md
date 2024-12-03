Skin Cancer Detection using Deep Learning
Overview
This project uses deep learning to classify images of skin cancer into multiple categories. The dataset used for this project is sourced from Kaggle and includes images from the ISIC archive. The goal is to create a robust model that can help in the early detection of skin cancer by identifying different types of cancerous skin lesions.

Dataset
Source: Kaggle Skin Cancer 9 Classes ISIC Dataset
Classes: 9 different types of skin cancer lesions
Project Structure
The main components of the project include:

Dataset Preparation: The dataset is downloaded and extracted from Kaggle. It contains images of skin lesions, each labeled with a specific cancer type.
Modeling: A deep learning model is built using popular libraries to classify the images into the appropriate skin cancer category.
Evaluation: The model's performance is evaluated based on accuracy, precision, recall, and other relevant metrics.
Installation and Usage
Requirements:-
Python 3.x
TensorFlow
Keras
Kaggle API
Jupyter Notebook
Setup
Clone the repository:-
git clone https://github.com/manasvi1725/skin-cancer.git
Install dependencies:-
pip install -r requirements.txt
Run the notebook: Open the Jupyter notebook Skin_Cancer_detection_main.ipynb and execute the cells to train and evaluate the model.

Dataset Download:-
Ensure you have Kaggle API set up on your machine. The dataset is downloaded via Kaggle API:
kaggle datasets download -d nodoubttome/skin-cancer9-classesisic

Model Training:-
The notebook uses a deep learning architecture to classify skin cancer images into one of the nine classes. The model is trained and validated on the dataset, with metrics such as accuracy and loss plotted for performance evaluation.

Results
The model achieves significant accuracy in identifying different types of skin lesions. For detailed results and analysis, refer to the notebook.

Webstite
Can explore the website on the link below, has not been deployed yet so have to run flask in the backend.
https://manasvi1725.github.io/skin-cancer/

Contribution
Feel free to contribute to this project by submitting pull requests. 

