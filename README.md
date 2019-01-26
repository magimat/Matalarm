# Matalarm - NOT USED ANYMORE


### port série

attention au port série usb

ajuster /etc/ser2sock/ser2sock.conf en conséquence:

```device = /dev/ttyUSB0```


###  Notes

Prérequis ser2sock: https://github.com/nutechsoftware/ser2sock

basé sur node-ad2usb : https://github.com/alexkwolfe/node-ad2usb

utilisation d'un fork perso pour ajustement stayAway pour mode instant away

on doit installer coffee-script globalement     

```sudo npm install -g coffee-script```

pour builder le CakeFile de node-ad2usb

puis ajout de dépendance privée:

```npm install https://github.com/magimat/node-ad2usb/tarball/master -save```


référence ad2usb protocol:  http://www.alarmdecoder.com/wiki/index.php/Protocol



pour installer en service sur raspberry pi, voir repo Matsteon


