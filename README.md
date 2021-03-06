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

- id : identifiant unique 

- rank : le rang

- symbol : le symbole le plus couramment utilisé pour identifier cet actif en bourse

- name : nom propre de l'actif

- upply : offre disponible pour le commerce

- maxSupply : quantité totale d'actif émis

- marketCapUsd : supply x prix

- volumeUsd24Hr : quantité de volume de transactions représentée en USD au cours des dernières 24 heures

- priceUsd : prix pondéré en fonction du volume basé sur des données de marché en temps réel, converti en USD

- changePercent24Hr : la direction et la valeur changent au cours des dernières 24 heures

- vwap24Hr : Prix moyen pondéré en fonction du volume au cours des dernières 24 heures


### markets :

![image](https://user-images.githubusercontent.com/101930870/159255040-1fa7a0ce-eafd-4e2d-adf9-49d3e1a33b49.png)

- exchangeId : identifiant unique 
 
- rank :  ce nombre représente le montant du volume traité par ce marché par rapport à d'autres marchés sur cette bourse

- baseSymbol : symbole le plus couramment utilisé pour identifier la device

- baseId : identifiant unique pour cette device

- quoteSymbol : symbole le plus couramment utilisé pour identifier l'actif, la citation est l'actif utilisé pour acheter la base

- quoteId : symbole le plus couramment utilisé pour identifier la device

- priceQuote : le montant de la device de cotation échangé pour une unité de la device de base

- priceUsd : prix de devis traduit en USD

- volumeUsd24Hr : volume traité sur ce marché au cours des dernières 24 heures

- percentExchangeVolume : le volume quotidien d'un seul marché traité par rapport au volume quotidien total de tous les marchés de la bourse

- tradesCount24Hr : nombre de transactions sur ce marché au cours des dernières 24 heures

- updated : Horodatage UNIX (millisecondes) depuis la réception des informations de ce marché particulier

### candles :

Ces données sont représentées dans les OHLCV candles - Open, High, Low, Close et Volume. De nombreux paramètres sont nécessaires pour demander des candles pour un marché spécifique .

![image](https://user-images.githubusercontent.com/101930870/159254976-058668fd-72fb-451a-ad28-a05ce61203f7.png)


- open : le prix auquel la première transaction a été effectuée dans une période de temps donnée

- high : le prix le plus élevé auquel la base a été négociée au cours de la période

- low : le prix plancher auquel la base a été négociée au cours de la période

- close : le prix auquel la dernière transaction a été effectuée au cours d'une période donnée

- volume : le montant de l'actif de base échangé au cours de la période donnée

- period : horodatage du début de cette période, représenté en millisecondes UNIX

