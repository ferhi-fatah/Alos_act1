# Alos_act1
l'activite 1 de module Architecture logicielle orientée service -- coding API JSON-SERVER

## Etape1 :
l'installation NodeJs

`$ sudo apt-get install nodejs `

## Etape2 :
la configuration du serveur JSON

`$ npm install -g json-server`

## Etape3 :
l'installation de npm 

`$ sudo apt install npm`

## Les ressources :
on a 3 ressources : currencies markets and candles

### currencies : 

![image](https://user-images.githubusercontent.com/101930870/159255491-93f4c0e4-d54b-45d1-ad19-4fd9d2d42a13.png)

id : identifiant unique 

rank : le rang

symbol : le symbole le plus couramment utilisé pour identifier cet actif en bourse

name : nom propre de l'actif

supply : offre disponible pour le commerce

maxSupply : quantité totale d'actif émis

marketCapUsd : supply x prix

volumeUsd24Hr : quantité de volume de transactions représentée en USD au cours des dernières 24 heures

priceUsd : prix pondéré en fonction du volume basé sur des données de marché en temps réel, converti en USD

changePercent24Hr : la direction et la valeur changent au cours des dernières 24 heures

vwap24Hr : Prix moyen pondéré en fonction du volume au cours des dernières 24 heures


### markets :

![image](https://user-images.githubusercontent.com/101930870/159255040-1fa7a0ce-eafd-4e2d-adf9-49d3e1a33b49.png)


### candles :

![image](https://user-images.githubusercontent.com/101930870/159254976-058668fd-72fb-451a-ad28-a05ce61203f7.png)


