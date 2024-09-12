## 🛠️ How to dev

### :wrench: Requirements

* [Visual Studio Code](https://code.visualstudio.com/download) or any other IDE
* [NodeJS](https://nodejs.org/en/download) ≥ v18.0.0 :warning::warning::warning:

&nbsp;

### :gear: Setting up the Development Environment

1. Clone the repository in your IDE

2. Install the [pnpm](https://pnpm.io/installation) package manager by running :

    * **For Windows:**

        ```powershell
        iwr https://get.pnpm.io/install.ps1 -useb | iex
        ```

    * **For Other OS:**

        Refer to the [Official Installation Guide](https://pnpm.io/installation)

    * **Alternative method using npm:**

        ```shell
        npm install -g pnpm
        ```

3. Install the project dependencies by running :

    ```shell
    pnpm i
    ```

4. Start the development server by running :

    ```shell
    pnpm run dev
    ```

    Or build using:

    ```shell
    pnpm run build
    ```

    ```shell
    pnpm run serve
    ```

> [!NOTE]
> Closing Visual Studio Code will also close the npm dev server.

4. Open [http://localhost:3000/](http://localhost:3000/) in your browser to access the app

&nbsp;

## 🔧 Troubleshooting

### :warning: Performing a Clean Package Installation (node_modules reset)

> [!IMPORTANT]
> This will delete your current `/node_modules` and reinstall the packages.

1. Run the following command :

    ```shell
    pnpm run ci
    ```

&nbsp;

### :warning: Error `Unknown at rule "@...(unknownAtRules)` showing up in Visual Studio Code

1. Press `CTRL > SHIFT > P`
2. Enter `Preferences: Open User Settings (JSON)`
3. Add the following line to your settings

    ```json
        "css.customData": [".vscode/tailwind.json"]
    ```
