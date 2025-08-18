import { Injectable } from "@angular/core"
import { type Observable, of } from "rxjs"
import type { Blog } from "../models/blog.model"

@Injectable({
  providedIn: "root",
})
export class BlogsService {
  private blogs: Blog[] = [  {
    "id": "1",
    "title": "A Guide to Starting with GrovePi+ in 2024",
    "excerpt": "A hands-on guide for setting up and using GrovePi+ with Raspberry Pi in 2024, including SD card flashing, SSH access, Python environment setup, and project tips.",
    "content": "I got a GrovePi+ for my assignment, but it did not go well since the community for this device has not been active since 2021.\n\nAfter all this suffering, I decided to leave some notes so future generations can learn from my mistakes.\n\nYou can find our assignment's info at the end of the page, and here: https://github.com/BurningZilch/DK-DINO\n\nThe first mistake I made was choosing to use GrovePi+ without any research. If it's not too late for you, run and never come back. There are many similar products that are still maintained; you can find them on YouTube, Google, and ChatGPT.\n\nFirst of all, check this wiki: https://wiki.seeedstudio.com/GrovePi_Plus/ and make sure your device is the GrovePi+ (the blue one). The official wiki has referred to another device as GrovePi Plus for Raspberry Pi (the green one).\n\n---\n\n**Flash the SD Card**: Use an 8GB+ microSD card with GrovePi+ on Raspberry Pi. Download the newest Buster OS: https://downloads.raspberrypi.org/raspios_armhf/images/raspios_armhf-2021-05-28/2021-05-07-raspios-buster-armhf.zip and flash with Raspberry Pi Imager. Configure SSH/Wi-Fi if no monitor.\n\n**SSH into the Raspberry Pi**: Use Termius or your preferred terminal. Command: ssh pi@raspberrypi.local. Enable I2C, SPI, VNC, camera in raspi-config.\n\n**Set Up the Python Environment**: Install dependencies and GrovePi libraries via apt, pip, and curl as per instructions.\n\n**Try Sample Code**: Explore 'DexterInd' and 'grove.py' folders for examples.\n\n**Write Code for Yourself**: Minimize simultaneous component interactions to reduce I2C noise issues.\n\nProject: https://github.com/BurningZilch/DK-DINO",
    "date": new Date("2024-06-04"),
    "author": "Ash",
    "tags": ["GrovePi+", "RaspberryPi", "Python"],
    "featuredImage": "assets/img/Grovepiplus.png",
    "slug": "guide-to-starting-with-grovepi-2024"
  },
    {
      "id": "2",
      "title": "How to use you-get/yt-dlp to download video on linux or windows",
      "excerpt": "Step-by-step tutorial on installing and using you-get or yt-dlp to download videos from YouTube, Bilibili, and other sites on both Linux and Windows.",
      "content": "You-get is a powerful tool to download video from websites like YouTube and Bilibili. yt-dlp is a modern alternative recommended for larger videos.\n\nBefore starting, ensure Python >= 3.74 and ffmpeg are installed.\n\n**Windows**: Install you-get via pip, set PATH in Environment Variables, or use yt-dlp standalone exe.\n\n**Linux**: Clone from GitHub, edit ~/.bashrc to add the tool to PATH, then source ~/.bashrc.\n\n**Downloading videos**: Command: you-get <url>. Options: -o for output path, -O for file name.\n\nExample: `you-get -o ~/Videos -O goodsong 'https://www.youtube.com/watch?v=--9kqhzQ-8Q'`.\n\nFor more functions like proxy, see the you-get GitHub page: https://github.com/soimort/you-get",
      "date": new Date("2024-06-08"),
      "author": "Ash",
      "tags": ["you-get"],
      "featuredImage": "assets/img/yt-dlp.png",
    "slug": "youget-video-download-guide"
},
{
  "id": "3",
  "title": "Using MATLAB to simulate BLE with multipath fading with interference and machine learning",
  "excerpt": "A university project simulating BLE environments with multipath fading, interference, and evaluating ML models like CNN and Random Forest on the data.",
  "content": "This project analyzed how BLE jamming affects ML models trained to process BLE data using MATLAB.\n\n**Overview**: Simulated BLE environments with interference, generated datasets, and trained ML models.\n\n**Make it Work**: Built BLE Device, Connection Channel, and Waveform classes; tested RSSI with Random Forest.\n\n**Make it Right**: Added noise/jamming, realistic RSSI calculations, and trained CNN for pattern recognition.\n\nResults showed interference significantly affects ML performance. Project repo: https://github.com/BurningZilch/BLE-jamming-simulation",
  "date": new Date ("2024-11-25"),
  "author": "Ash",
  "tags": ["MATLAB", "BLE", "Machine Learning"],
  "featuredImage": "assets/img/BLE.png",
  "slug": "ble-multipath-fading-ml"
}
  ]

  getBlogs(): Observable<Blog[]> {
    return of(this.blogs)
  }

  getBlogById(id: string): Observable<Blog | undefined> {
    const blog = this.blogs.find((b) => b.id === id)
    return of(blog)
  }
}
