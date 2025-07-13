set -o errexit

curr_dir=$(pwd)
out_dir="client"

cd ../Cardchain
ignite generate ts-client  -y -o "${curr_dir}/${out_dir}"
cd $curr_dir
find ${out_dir} -type f -name "*.ts" -exec sed -i -E 's|\./types/(.*)|../types/\1|g' {} +
rm -r ${out_dir}/*/types

buf generate --template buf.gen.ts-cosmos.yaml

sed -i -E 's|packet_id\.||g' ${out_dir}/ibc.applications.fee.v1/rest.ts

temp_file=`mktemp`
jq ". + `cat package.json.tmpl`" \
    $out_dir/package.json > $temp_file
mv $temp_file $out_dir/package.json

cd ${out_dir}
npm i
npm run build
