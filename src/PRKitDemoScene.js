/** ----------------------------------------------------------------------------------
 *
 *      File            PRKitDemoScene.js
 *      Ported By       Young-Hwan Mun
 *      Contact         yh.msw9@gmail.com
 * 
 * -----------------------------------------------------------------------------------
 *   
 *      Created By      ChildhoodAndy on 14-4-16    
 *
 * -----------------------------------------------------------------------------------
 * 
 *      Permission is hereby granted, free of charge, to any person obtaining a copy
 *      of this software and associated documentation files (the "Software"), to deal
 *      in the Software without restriction, including without limitation the rights
 *      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *      copies of the Software, and to permit persons to whom the Software is
 *      furnished to do so, subject to the following conditions:
 * 
 *      The above copyright notice and this permission notice shall be included in
 *      all copies or substantial portions of the Software.
 * 
 *      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *      THE SOFTWARE.
 *
 * ----------------------------------------------------------------------------------- */ 

msw.PRKitDemoScene = cc.Scene.extend
({
	ctor:function ( )
	{
		this._super ( );

		var 	ColorBg = new cc.LayerColor ( cc.color ( 125, 125, 125, 125 ) );
		this.addChild ( ColorBg );

		var		Points = 
		[
		  	100, 100,
		  	200, 100,
		  	300, 200,
		  	400, 300,
		  	500, 500
		];
		
		var		Vertices = 
		[
		 	cc.p ( 100, 100 ),
		 	cc.p ( 200, 100 ),
		 	cc.p ( 300, 200 ),
		 	cc.p ( 400, 300 ),
		 	cc.p ( 500, 500 )
		];
		
		var		Verts = 0 ? Points : Vertices;
		
		var		Texture = cc.textureCache.addImage ( "res/pattern1.png" );

		var		FilledPolygon = new cc.PRFilledPolygon ( );

		var Repeat = true; // this can be set to false for non-repeating big textures
		FilledPolygon.initWithPoints ( Verts, Texture, Repeat );
		this.addChild ( FilledPolygon ); 
	}
});
