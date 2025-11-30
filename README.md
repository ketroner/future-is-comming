# Future is comming ...

A dark, nerdy exploration of the near future of artificial intelligence. Features a responsive, modern design with neon accents.

## Structure

- `index.html` — main page
- `styles.css` — styles
- `script.js` — lightweight interactions

## Quick Start (Windows PowerShell)

```powershell
cd C:\www_webpage
# Open locally (use Live Server extension or a simple HTTP server):
# Python 3: python -m http.server 8000
start http://localhost:8000
```

## Deployment

This project is deployed to GitHub Pages at:
```
https://ketroner.github.io/future-is-comming/
```

### GitHub Pages Configuration

The site is automatically deployed from the `main` branch.

### Local Git & GitHub Setup

1. Initialize git and commit:

```powershell
cd C:\www_webpage
git init
git branch -M main
git add .
git commit -m "Initial commit: responsive AI future site"
```

2. Create a repo on GitHub and push using `gh` CLI (if available):

```powershell
gh repo create <your-username>/<repo-name> --public --source=. --remote=origin --push
```

Or manually add the remote and push:

```powershell
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Development

To develop locally, edit `index.html`, `styles.css`, or `script.js` and refresh your browser.

### SSH Configuration (Optional)

If port 22 is blocked on your network, the `~/.ssh/config` is configured to use GitHub's SSH service via port 443:

```
Host github.com
  HostName ssh.github.com
  Port 443
  User git
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes
```

## License

Public domain / Experimental content.
