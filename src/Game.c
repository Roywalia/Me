#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int game[4][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12},
        {13, 14, 15, 0}
    };
    
    int LocRow = 3, LocCol = 3;
    char chk = ' ';
    
    while (chk != 'q') {
        for (int i = 0; i < 4; i++) {
            printf("| ");
            for (int j = 0; j < 4; j++) {
                printf("%d | ", game[i][j]);
            }
            printf("\n");
        }
        
        printf("Enter 'w', 'a', 's', 'd' to move, 'q' to quit: ");
        scanf(" %c", &chk);

        if (chk == 'w' && LocRow < 3) {
            swap(&game[LocRow][LocCol], &game[LocRow + 1][LocCol]);
            LocRow += 1;
        }
        else if (chk == 's' && LocRow > 0) {
            swap(&game[LocRow][LocCol], &game[LocRow - 1][LocCol]);
            LocRow -= 1;
        }
        else if (chk == 'a' && LocCol < 3) {
            swap(&game[LocRow][LocCol], &game[LocRow][LocCol + 1]);
            LocCol += 1;
        }
        else if (chk == 'd' && LocCol > 0) {
            swap(&game[LocRow][LocCol], &game[LocRow][LocCol - 1]);
            LocCol -= 1;
        }
    }

    return 0;
}