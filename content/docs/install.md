---
title: "What Is Zirconium"
weight: 1
---

# Installing Zirconium

The best way to install Zirconium is to download our ISOs! Pick your flavor:

- AMD64
  - **[AMD/Intel GPUs](https://isos.zirconium.gay/zirconium-isos/zirconium-amd64.iso)** ([Checksum](https://isos.zirconium.gay/zirconium-isos/zirconium-amd64.iso-CHECKSUM))
  - **[NVIDIA GPUs (GTX 16xx and RTX series)](https://isos.zirconium.gay/zirconium-isos/zirconium-nvidia-amd64.iso)** ([Checksum](https://isos.zirconium.gay/zirconium-isos/zirconium-nvidia-amd64.iso-CHECKSUM))
- ARM64
  - **[AMD/Intel GPUs](https://isos.zirconium.gay/zirconium-isos/zirconium-arm64.iso)** ([Checksum](https://isos.zirconium.gay/zirconium-isos/zirconium-arm64.iso-CHECKSUM))
  - **[NVIDIA GPUs (GTX 16xx and RTX series)](https://isos.zirconium.gay/zirconium-isos/zirconium-nvidia-arm64.iso)** ([Checksum](https://isos.zirconium.gay/zirconium-isos/zirconium-nvidia-arm64.iso-CHECKSUM))

Alternatively, you can install Zirconium by doing a rebase from an existing Fedora Atomic install. We recommend [Bluefin](https://projectbluefin.io/), but it doesn't really matter.

Once you have some flavour of Fedora Atomic installed, run this command:

```
sudo bootc switch ghcr.io/zirconium-dev/zirconium:latest
```

If you also have NVIDIA GPU (GTX 16xx or RTX series), run this command instead:

```
sudo bootc switch ghcr.io/zirconium-dev/zirconium-nvidia:latest
```
