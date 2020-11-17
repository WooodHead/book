import React, { useState, FC, useRef } from 'react';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { FileUploadProps } from '../types';
import { API_BASE, STATIC_RESOURCE_FILE_PATH, CONTEXT } from '../APIUrls';
import FilePondPluginFileRename from 'filepond-plugin-file-rename';
import { FilePondErrorDescription, FilePondFile } from 'filepond';
import { useInput } from 'react-admin';
import PropTypes from 'prop-types';
// Register the plugins
registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileRename
);

// Our app
const ImagePicker = (props:any) => {
   
    const [filename, setFilename] = useState<string>(
        Date.now().toString() + '.jpg'
    );
    const {source,record} = props;
    const { input } = useInput({ source });
    const pond = useRef<any>(null);
    const { token } = JSON.parse(localStorage.getItem('auth')!);
    let files:any = null;
   

    const handleInit = () => {
        if (record[source]) {
            files = [
                {
                    source: `${API_BASE}${STATIC_RESOURCE_FILE_PATH}/${record[source]}`,
                    options: {
                        type: 'local',
                    },
                },
            ];
        }
        pond.current.addFiles(files);
        //console.log("FilePond instance has initialised", pond);
    };

    return (
        <div className="App">
            <FilePond
                ref={pond}
                //files={this.state.files}
                allowMultiple={false}
                allowReorder={true}
                //files={files}
                accepted-file-types="image/jpeg, image/png"
                maxFiles={1}
                labelIdle='从桌面拖拉文件或 <span class="filepond--label-action">浏览文件</span>'
                server={{
                    url: `${API_BASE}${CONTEXT}/upload`,
                    headers: {
                        'x-nideshop-token': token,
                        filename: filename.toString(),
                    },
                    //restore: '?id=1605604900167.jpg',
                    load: (source, load, error, progress, abort, headers) => {
                        console.log('source', source)
                        var myRequest = new Request(source);
                        fetch(myRequest).then(function (response) {
                            response.blob().then(function (myBlob) {
                                load(myBlob);
                            });
                        });
                    },
                }}
                name="files"
                oninit={() => handleInit()}
                onaddfile={(
                    error: FilePondErrorDescription | null,
                    file: FilePondFile
                ) => {
                    setFilename(Date.now().toString() + '.jpg');
                }}
                onprocessfile={(
                    error: FilePondErrorDescription | null,
                    file: FilePondFile
                ) => {
                    if (error) {
                        console.log('Oh no');
                        return;
                    }
                    //onprocessend(filename);
                    input.onChange(filename);
                }}
            />
        </div>
    );
};

ImagePicker.propTypes = {
    input: PropTypes.object,
    imageName: PropTypes.string,
    meta: PropTypes.object,
   
    source: PropTypes.string,
    
  };

export default ImagePicker;
