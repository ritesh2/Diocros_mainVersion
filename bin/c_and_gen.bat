@ECHO off
chdir /d  "C:\Program Files\Diocros\workspace\%1"
avr-gcc.exe  -mmcu=atmega128 -Wall -gdwarf-2 -Os -std=gnu99 -funsigned-char -funsigned-bitfields -fpack-struct -fshort-enums -MD -MP -MT %1.o -MF %1.o.d  -c  %1.c
avr-gcc.exe -mmcu=atmega128 -Wl,-Map=%1.map %1.o     -o %1.elf
avr-objcopy -O ihex -R .eeprom  %1.elf %1.hex
avr-objcopy -j .eeprom --set-section-flags=.eeprom="alloc,load" --change-section-lma .eeprom=0 --no-change-warnings -O ihex %1.elf %1.eep || exit 0
avr-objdump -h -S %1.elf > %1.lss

rm %1.eep
rm %1.elf
rm %1.lss
rm %1.map
rm %1.o
rm %1.o.d

avrdude -p ATMEGA16 -c usbasp -P COM1 -V -U flash:w:%1.hex:i
