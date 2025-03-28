ffmpeg -i cube_side_hd.mp4 -c:v libx265 -b:v 900k -bufsize 3000k -an cube_side.mp4
ffmpeg -i cube_side_hd.mp4 -c:v vp9 -b:v 1100k -bufsize 3000k -an cube_side_vp9.mp4