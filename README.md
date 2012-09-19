#  UReddit

API Wrapper for the University of Reddit. Version 1.0.0

## Installation
    $ [sudo] npm install ureddit

## Usage
    var UReddit = require('ureddit');

    var uni = new UReddit();
    uni.catalog(function( error, data ){
        // Do stuff with data.
    });
    uni.class("23466", function( error, data ){
        // Do stuff with data.
    });

Check out http://ureddit.com/api for full list of features.

## Testing
To run the tests:
<pre>$ make test </pre>

## LICENSE
(MIT License)

Copyright (c) 2012 Gaurav Mali <hello@gauravmali.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.