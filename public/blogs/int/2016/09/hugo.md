I have recently concluded that loading Markdown files with `<iron-ajax>` is unacceptable for site loading times, so I'm going to try out Hugo, a static site generator.  I'm planning on using it with a custom theme involving web components.

## Code

Here is some C# code

```csharp
using System;
using Gtk;

public partial class MainWindow : Gtk.Window
{
	public MainWindow() : base(Gtk.WindowType.Toplevel)
	{
		Build();
	}

	protected void OnDeleteEvent(object sender, DeleteEventArgs a)
	{
		Application.Quit();
		a.RetVal = true;
	}

	protected void ButtonWasClicked(object sender, EventArgs e)
	{
		if(this.inputEntry.Text.Length > 10 || this.kValueEntry.Text.Length > 10) this.outputEntry.Text = "Please use smaller numbers the computer can handle.";
		this.outputEntry.Text = primality.MainClass.IsPrime(this.inputEntry.Text, this.kValueEntry.Text);
	}
}
```

## Stuff

I hope you enjoyed that code.  I just needed to test syntax highlighting.  Also the "Stuff" heading should be highlighted.
