#include <string>
#include <vector>

using namespace std;

int cache[500][500];

void sum(int i, int j, vector<vector<int>> &triangle)
{
  if (i == triangle.size() - 2)
  {
    cache[i][j] = triangle[i][j] + max(triangle[i + 1][j], triangle[i + 1][j + 1]);
  }
  else
  {
    cache[i][j] = triangle[i][j] + max(cache[i + 1][j], cache[i + 1][j + 1]);
  }
}

// triangle: [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]
int solution(vector<vector<int>> triangle)
{
  for (int i = 0; i < triangle.size(); ++i)
  {
    for (int j = 0; j < triangle.size(); ++j)
    {
      cache[i][j] = -1;
    }
  }

  int answer = 0;

  int n = triangle.size();

  while (n > 1)
  {
    for (int i = 0; i < n - 1; ++i)
    {
      sum(n - 2, i, triangle);
    }
    n--;
  }

  return cache[0][0];
}