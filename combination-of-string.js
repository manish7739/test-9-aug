function combination( str , n)
    {
       for (let i = 0; i < n; i++)
           for (let j = i+1; j <= n; j++)
                console.log(str.substring(i, j));
    }
        var str = "dog";
        combination(str, str.length);