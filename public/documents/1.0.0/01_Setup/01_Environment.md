## OS
At this time Totem has been developed on Unix based operating systems and if you contributing this is the only supported OS in terms of the tools, servers and other requirements.

### File Structure
The structure your file system outside of the application is largely unimportant, but certain tools such as `Totem Command Line` may need to be tweaked given your file paths.

If you wish to use the default paths the following structure is recommended, all command-line instructions will be referenced using this structure.

```bash
├── projects
│   ├── repos
│   │   ├── your-app-api
│   │   ├── your-app-client
│   │   ├── totem-api
│   │   ├── totem-client
│   ├── your-app (Ember App)
│   ├── your-app-server (Rails App)
│   ├── totem-oauth
```


