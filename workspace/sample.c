int i;


#include<avr/io.h>
#include<util/delay.h>
#include<avr/leds.h>
void main(){
  while (1) {
    for (i = 1; i <= 5; i++) {
      led_on(i);
      led_off(i - (1));
      _delay_ms(1000);
    }
  }
}