
//  Evenodd.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-12-12 File created.   2016-12-12 Last modification.

/*  In this program the remainder operator % is used to test
    whether the given number is even or odd.

    The remainder operator returns the remainder left over when
    its left operand is divided by its right operand.
*/

process.stdout.write( "\n This program can find out whether a number"
                   +  "\n is even or odd. Please, give a number: " ) ;

process.stdin.on( "data", function( input_from_user )
{
   var given_number = Number( input_from_user ) ;
   
   if ( isNaN( given_number ) )
   {
   process.stdout.write( "\n You did not type in a number.\n\n" )
   }
   else if (given_number < 0)
   {
      process.stdout.write("\n" + "Negative numbers are not allowed!");
   }
   else {
   if ( ( given_number  %  2 )  ==  0 )
   {
      process.stdout.write( "\n" + given_number + " is even.\n\n" ) ;
   }
   else
   {
      process.stdout.write( "\n" + given_number + " is odd.\n\n" ) ;
   }
   
  /* if (given_number < 10 || given_number > 1000)
   {
      process.stdout.write("\n" + given_number +  " is not acceptable.")
   }*/
   var min = given_number - 5;
   var max = given_number + 6;
   var random_number = Math.floor(Math.random() * (max - min) + min);
   process.stdout.write("\n" +  "My number is: " + random_number);
   if (given_number > random_number)
   {
      process.stdout.write("\n" + "You won, for now!");
   }
   else if(given_number < random_number)
   {
      process.stdout.write("\n" + "I win!");
   }
   else
   {
      process.stdout.write("\n" + "Draw? I demand another one!");
   }
}
   process.exit() ;
} ) ;