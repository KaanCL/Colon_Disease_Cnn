from tensorflow.keras.layers import *
from tensorflow.keras.models import * 
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
import numpy as np

model = load_model('../model.h5')

class Model:
    def __init__(self,file):
        self.file = file

    def evulateModel(self):
        try:
            img = image.load_img(self.file,target_size=(224,224))
            imag = image.img_to_array(img)
            imaga = np.expand_dims(imag,axis=0)
            pred = model.predict(imaga)

            a=np.argmax(pred,-1)

            if  a==0:
                result="Normal"
            elif a==1:
                result="Ulcerative colitis"
            elif a==2:
                result="Polyp"
            else:
                result="Esophagitis" 
            return result
        
        except Exception as e:
            return str(e)



