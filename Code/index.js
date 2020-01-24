var Parser = require('expr-eval').Parser;

   
    var x = 0
    var y = 0
    function f(x)
    {
        return Math.pow(x-30,3)-48;
    }
    window.test =function()
    {

        var parser = new Parser();
        var Eq=document.getElementById("Equation").value;
        var X1Value=document.getElementById("X1Value").value;
        var X2Value=document.getElementById("X2Value").value;
        var ToleranceValue=document.getElementById("ToleranceValue").value;
        var ParsedEquation=parser.parse(Eq);
        var ParsedX1Value=parseFloat(X1Value);
        var ParsedX2Value=parseFloat(X2Value);
        var ParsedToleranceValue=parseFloat(ToleranceValue);
        var res=Bisect(ParsedEquation,ParsedX1Value,ParsedX2Value,ParsedToleranceValue);
        return res;
        
    }

    function Bisect(Funct, X1, X2, Tolerance) 
    {
        var Xdif=0;
        var Xhalfdif=(X2-X1)*"0.5";
        var Halfpoint=X1+Xhalfdif;
        var y1=Funct.evaluate({x:X1});
        var y2=Funct.evaluate({x:X2});
        var yHalfpoint= Funct.evaluate({x:Halfpoint});
        if(y1*y2<=0)
        {
            while (Math.abs(y1)>Tolerance || Math.abs(y2)>Tolerance)
            {
                console.log(y1+"  "+y2);
                if(y1*y2<=0)
                { 
                    Xhalfdif=(X2-X1)*0.5;
                    Halfpoint= X1+Xhalfdif;
                    X2=Halfpoint;
                    yHalfpoint= Funct.evaluate({x:X2});
                    y2=yHalfpoint;
                    document.getElementById('Outputbox').innerHTML += "<br>"+X1+Xhalfdif+"<br>";
                }
                else
                {
                    Xdif=X2-X1;
                    X1=X2;
                    y1=y2;
                    X2=X1+Xdif;
                    y2=Funct.evaluate({x:X2});
                }        
            }
        }
        else
        {
            alert("Please have x values resulting in different sign y values");
        }
    }