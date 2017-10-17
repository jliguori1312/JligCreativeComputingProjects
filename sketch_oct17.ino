int counter = 0;
int inByte;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:

  if(Serial.available() > 0) {
    inByte = Serial.read();
    Serial.write(inByte);
    analogWrite(9, inByte);
    if(inByte < 255){
      delay(.3);
    }
    if(inByte = 255){
      delay(50);
      analogWrite(9, 0);
    }
  }



//  for (int i = 0; i < 255; i++) {
//      analogWrite(9, i);
//      delay(30);
//    }





}
