# First setup

Go to `system` dir:

```bash
make set_up
```

# Daily development

```bash
make fg
apply yarn
start all
```

# Debuging with REPL:

Repl use to call messages directly from console.

To run repl you need first to install rlwrap.

For Ubuntu:

```bash
sudo apt install rlwrap
```

and to run services.

After that go to `system` folder and `type`:

```bash
make repl

# in repl terminal
role:color,cmd:get,a:1 # ok
role:color,cmd:get,a:2 # err
```

@TODO: move all bash script to Makefile

# Note for VSCode developr

- Go to root folder and run `yarn`
- In VSCode set TypeScript version to use workspace version, e.g 2.x.x
