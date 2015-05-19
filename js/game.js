/*
 * This class is responcible for handling the majority of the actual workings of
 * the Othello game.
 */
<script>
 <script type="text/javascript">

 var row, col, val;

 function CreateMultiArray()

 //This function creates and fills the array

 {

   MultiArray = new Array(8)

   MultiArray [0] = new Array(8)

   MultiArray[3][3] = "Black"

   MultiArray[3][4] = "White"

   MultiArray[4][3] = "White"

   MultiArray[4][4] = "Black"

   for (i = 0, i < 8; i++) {
     for (j = 0, len = cars.length, text = ""; i < 8; i++) {
        if(MultiArray[i][j] != "Black" && MultiArray[i][j] != "White")
          MultiArray[i][j] = "Green";
     }
   }
 }

 function getArray(row,col){

   return MultiArray[row][col];

 }

 function putArray(row, col, val){

   MultiArray[row][col] = val;

 }
 function draw(){
  for(i = 0, )
 }
 </ script>
