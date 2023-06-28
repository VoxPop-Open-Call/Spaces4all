# Spaces4all
Inclusive tourist maps of Lisbon. This project is co-financed by the European Regional Development Fund through the Urban Innovative Actions Initiative.
## About

Spaces4all is an MVP application made by [Ambigrama](http://www.ambigrama.pt) and co-financed by the European Regional Development Fund through the Urban Innovative Actions Initiative.  

It uses React Native and Expo.

Spaces4all offers digital maps of tourist locations in Lisbon. The courses were hand made to be safe and informative for all users, regardless of visual, auditive or motor disabilities. 

At present the MVP is only available on Android, builds can be found in the “Releases” section of our GitHub page.

  

## Requirements

  

````console
 node >= v18.12.1
 ````
````console
 npm >= 9.2.0
 ````


  

This application makes use of the [Google Maps API](https://developers.google.com/maps).

  

## Installation  

- Clone the repo.
- Install all dependencies.
	````console
	$ npm install
	 ````
- Set all environmental variables in ./eas.json to your google maps API key.

## Expo Go  

Expo allows for hot reloads, this way you don't have to build constantly during the development process, more information [here](http://docs.expo.dev).  
  

## Build

  

For non developer standalone .apks run

npx eas build -p android --profile preview

  

For developer .apks run

````console
$ npx eas build -p android --profile development
````

## Disclaimer 
This project is co-financed by the European Regional Development Fund through the Urban Innovative Actions Initiative and is released under Creative Commons AttributionNoDerivatives 4.0 International (CC BY-ND 4.0)
