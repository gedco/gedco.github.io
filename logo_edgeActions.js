
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",14000,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_logo}","click",function(sym,e){window.open("index.htm","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Precargador'
(function(symbolName){})("Precargador");
//Edge symbol end:'Precargador'
})(jQuery,AdobeEdge,"EDGE-48669738");