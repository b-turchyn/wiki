# Grub Bootloader

Grub is the bootloader used on Ubuntu.

## Troubleshooting

### grub_file_filters not found

After upgrading Ubuntu from Bionic to Focal (20.04), I received the error
`symbol 'grub_file_filters' not found`.

To solve this, I adjusted the boot drive order in the BIOS settings to boot from
the `/boot` partition, as per [this StackOverflow
solution](https://askubuntu.com/a/1390684).  Others have suggested running
`update-grub` using a live CD, but the boot drive order seems to be an easier
thing to try first.
