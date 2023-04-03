---
---

# Push To Repository

1. Define `GH_USER` and `GH_EMAIL` in the repository secrets.
2. Create step in the job to configure Git credentials.
   ```yaml
   - name: Configure git credentials
     uses: OleksiyRudenko/gha-git-credentials@v2-latest
     with:
       name: "[ci] Brian Turchyn"
       email: "${{ secrets.GH_USER }}"
       actor: "b-turchyn"
       token: "${{ secrets.GITHUB_TOKEN }}"
   ```
3. Set Git config with name and email, then run the push in the same step.
   ```yaml
   - name: Build and Deploy
     run: |
       git config --global user.email "${{ secrets.GH_EMAIL }}"
       git config --global user.name "${{ secrets.GH_USER }}"
       git push # ...or other Git commands
   ```

All done!
