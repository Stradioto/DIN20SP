
//  Widename.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-12-02 File created.   2016-12-02 Last modification.

/*  In this program characters of a string are accessed with
    an index value inside brackets [ ]. Another possibility would
    be to use the charAt() method.
*/

process.stdout.write( "\n Please, type in your name: " ) ;

process.stdin.on( "data", function( input_from_user )
{
   // When we take the string from the user input, we need to
   // use the trim() method to get rid of line termination characters.
   
   var name_from_keyboard = input_from_user.toString().trim() ;

   process.stdout.write( "\n Here is your name in a wider form: \n\n  " ) ;

   // In the following loops, character_index gets values
   // 0, 1, 2, ... until the last possible index value.

   for ( let character_index  in  name_from_keyboard )
   {
      process.stdout.write( " "  +   name_from_keyboard[ character_index ] ) ;
   }

   process.stdout.write( "\n\n The characters as hexadecimal codes: \n\n  " ) ;

   for ( let character_index  in  name_from_keyboard )
   {
      // String method charCodeAt() returns the numerical Unicode.

      var character_code = name_from_keyboard.charCodeAt( character_index ) ;

      // Value 16 specifies that toString() must return a hexadecimal string.

      process.stdout.write(  " "  +  character_code.toString( 16 ) ) ;
   }


      process.stdout.write( "\n\n The length of your name is : " + name_from_keyboard.length + ".\n\n String in reverse character order: \n\n   " ) ;
      
      var reverse_Index = name_from_keyboard.length

      while (  reverse_Index >  0  )
      {
         reverse_Index  --  ;
         process.stdout.write( name_from_keyboard[ reverse_Index ] ) ;
      }


   process.stdout.write( "\n\n" ) ;
   process.exit() ;
} ) ;