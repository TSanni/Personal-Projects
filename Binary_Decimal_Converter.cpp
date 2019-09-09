//This is a program that will convert a binary number to its decimal equivalent
//or a decimal number to its binary equivalent
#include <iostream>
#include<vector>
#include <cmath>
using namespace std;


//Function Prototypes
vector<int> toBinary(int);
int toDecimal(int);
void one_Choice();
void two_Choice();


//Global Variables
 vector<int> result;
 int number;


//Main Function
int main()
{
    int choice;
    char repeat;
    cout << "This program will can convert a decimal number to binary or a binary number to decimal\n";
   
   do
   {
       cout << "What do you want to convert to?\n\n";
       cout << "1. Convert to Binary       2. Convert to Decimal             \n";
      
       cin >> choice;
       
       if (choice == 1)
       {
           one_Choice();
       }
       else if(choice == 2)
        {
            two_Choice();
        }
       
       cout << "Another conversion? Enter Y or y: ";
       cin >> repeat;
    
   }
    while (repeat == 'Y' || repeat == 'y');
    
    return 0;
}



//Function to convert a decimal number to its binary equivalent
vector<int> toBinary(int num)
{
    int rem;
    vector<int> remainders;
    
    while(num != 0)
    {
        rem = num % 2;
        remainders.push_back(rem);
        num = num / 2;
    }
    
    
    reverse(remainders.begin(), remainders.end());
    
    return remainders;
}


//Function to convert a binary number to its decimal equivalent
int toDecimal(int num)
{
    int sum = 0;
    int rem;
    int i = 0;
    
    while (num > 0)
    {
        rem = num % 10;
        sum = sum + pow(2, i) * rem;
        num = num / 10;
        i++;
    }
    return sum;
}



//Function for if the user's choice is 1
void one_Choice()
{
    cout << "Enter a number in decimal form: ";
    cin >> number;
    result = toBinary(number);
    
    cout << "Binary form: ";
    for (int i = 0; i < result.size(); i++)
        cout << result[i];
    
    cout << endl;
    
}


//Function for if the user's choice is 2
void two_Choice()
{
    double result2;
    cout << "Enter a number in binary form: ";
    cin >> number;
    result2 = toDecimal(number);
    cout <<"Decimal form: " << result2 << endl << endl;;
}
