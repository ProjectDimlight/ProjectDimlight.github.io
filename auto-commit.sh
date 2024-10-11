# TODO: parse markdown memo
cd SOLPage
npm run build
cd ..
git add .
git commit -m "$1"
# git push origin master