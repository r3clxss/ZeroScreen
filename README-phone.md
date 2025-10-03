# Access dev server from your phone

Follow these steps to open the local dev server from a phone on the same Wi‑Fi network.

1. Start the dev server bound to all interfaces:

```
# in project folder (Windows cmd)
npm run dev:host
```

2. Note the Network URL printed by Vite, for example:

```
Network: http://192.168.50.202:8080/
```

3. On your phone, connected to the same Wi‑Fi, open that URL in your browser.

Troubleshooting
- If the page doesn't load, verify your computer's IPv4 address with `ipconfig` and use that address instead of the example above.
- Ensure your phone and computer are on the same network (not guest/isolated networks).
- If Windows Firewall blocks access, allow `node.exe` or open port 8080 for private networks:
  - Windows Security -> Firewall & network protection -> Allow an app through firewall -> Allow `node.exe` for Private networks.

Optional: open the URL automatically from your Windows machine:

```
start http://<your-ip>:8080/
```

Replace `<your-ip>` with your actual IPv4 (e.g. `192.168.50.202`).

If you want, I can try to run `ipconfig` again or attempt to open the browser automatically for you. Let me know which you'd prefer.
