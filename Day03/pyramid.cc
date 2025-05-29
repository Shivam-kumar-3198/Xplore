#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i < 6; i++) {
        for (int j = 1; j < 6; j++) {
            if (j < i)
                cout << i; 
            else
                cout << j;
        }
        cout << endl;
    }
    return 0;
}
