public class CalculateRotation 
{
  public static void main(String[] args)
  {
    if (args.length < 2) 
    //checks if the arguements given are at least two strings
    {
      System.out.println("Please specify two strings to compare");
      //if not print to console and exit the running of the code
      System.exit(-1);
    }

    char[] firstArr = args[0].toCharArray();
    char[] secondArr = args[1].toCharArray();
    //splits the two args into separate arrays
    
    if (firstArr.length != secondArr.length)
    {
      System.out.println(args[0] + ", " + args[1] + " => -1");
      //if strings aren't same length return -1 for no rotation and exit
      System.exit(0);
    }
    
    for (int i=0; i<firstArr.length; i++)
    //loop through the first arg array
    {
      boolean matches = true;
      //set boolean variable matches to true
      for (int j=0; j<firstArr.length; j++)
      {
        if (firstArr[i] != secondArr[(j+i) % firstArr.length])
        //checks each letter in the first array against every letter in the second array
        {
          matches = false;
          //sets boolean variable matches to false
          break;
        }
      }
      if (matches == true) 
      {
        System.out.println(args[0] + ", " + args[1] + " => " + i);
        //prints to console the two args and how many times it is rotated and exits
        System.exit(0);
      }
    }

    System.out.println(args[0] + ", " + args[1] + " => -1");
    //if no rotation and words are same length, return the args and -1 for the rotation
  }
}