##Team Bitmap Destruction Force

**Collaborators:**

Lee Broxson, Peter Kim

##How to use this application

**Original 8-bit color bitmap**

      ![alt tag](../assets/bitmap.bmp)

This application's intent is to easily transform an 8-bit color bitmap file to either greenscale, grayscale or an inverted version of the original bitmap being used.

**Convert a single 8-bit color bitmap to a greenscaled, grayscaled and inverted color version all at once**

In the 'bitmap-destruction-force' directory, in your terminal, run the following command:

      node index.js

**Example of greenscaled bitmap**

In the primary repository, enter the following command:

      node index.js bitmapFileHelper.turnGreen(Greenscaler.greenScale);

      ![alt tag](./transformed-assets/greenscale-bitmap.bmp)

**Example of grayscaled bitmap**

In the primary repository, enter the following command:

      node index.js bitmapFileHelper.grayScale(Grayscaler.grayScale);

      ![alt tag](./transformed-assets/grayscale-bitmap.bmp)

**Example of invert-colored bitmap**

In the primary repository, enter the following command:

      node index.js bitmapFileHelper.invertColor(Inverter.invert);

      ![alt tag](./transformed-assets/inverted-bitmap.bmp)

More features and different bitmap transformers to come!
