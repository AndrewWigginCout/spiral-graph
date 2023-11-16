# An implementation of the graphing library

I was shown a coding exercise where the student was provided a graphing library without much of an indication of the library's inner workings. I took it upon myself to create an implemation of the API.

The provided functions were:

```draw_connected```  
```make_point```  
```x_of```  
```y_of```  

I wrote the ```spiral``` function. Invoking ```spiral``` yields a parametric function that you can input into the iterator function to draw the coordinates.

The point of the exercise is to see the power of functional programming. Rather than specifically coding a function that directly draws to the canvas, we can instead go through these needlessly convuluted steps. LOL.

However, that does present us the flexibility of swapping different functions to create different outputs. We can easily change the fidelity of the graph, and we can input a different parameterized math fuction. In other programs we can chain functions together programmatically. It's pretty cool.

Oh! Here's an idea: We could have two parametric functions, and we could sum them. Essentially the spiral is exactly that... Well no, actually, it's the product of the trig and a linear scale. But anyway, we could write another 2nd level function that takes two parametric functions and sums the x outputs and the y outputs. And then feed that into the iterator function to graph it.

To run this app, open the graph.html file in the browser. The html file links to the JS file, and will run it in the browser window. You can modify the functionality by modifying the graph.js file.