ffmpeg -i cube_near_hd.mp4 -ss 2.5 -c:v libx265 -crf 18 -preset fast cube_near_cut.mp4
ffmpeg -i cube_near_cut.mp4 -c:v libx265 -b:v 1500k -bufsize 3000k -an cube_near_comp.mp4

ffmpeg -i cube_near_comp.mp4 -vf reverse -c:v libx265 -an cube_near_reverse.mp4

cat << EOF > videos.txt
file 'cube_near_comp.mp4'
file 'cube_near_reverse.mp4'
EOF

ffmpeg -f concat -safe 0 -i videos.txt -c:v libx265 -c copy cube_near.mp4

rm -r videos.txt sube_near_cut.mp4 sube_near_comp.mp4 sube_near_rev.mp4